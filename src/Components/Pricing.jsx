import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { supabase } from '../SupabaseClient';

export default function Pricing() {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState("website");
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        fetchProduct();
    }, []);

    async function fetchProduct() {
        const { data, error } = await supabase.from("product").select("*");
    
        if (error) {
            console.error("Error Fetching Data Product", error);
        } else {
            console.log("Data Fetched: ", data);
            
            // Konversi kolom 'feature' dari string JSON ke array
            const processedData = data.map(product => ({
                ...product,
                feature: typeof product.feature === "string" 
                    ? JSON.parse(product.feature || "[]") 
                    : product.feature
            }));
    
            setProduct(processedData);
        }
    }
    

    const filteredPlans = product.filter(plan => plan.category === category);
    const visiblePlans = expanded ? filteredPlans : filteredPlans.slice(0, 3);

    const toggleView = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="flex flex-col justify-center items-center text-center text-white py-16 mx-auto gap-6" id="price">
            <div className='flex flex-col justify-center items-center text-center gap-6 w-auto lg:w-3xl'>
                <h2 className="text-4xl font-bold">Harga Jasa Terjangkau</h2>
                <p className='text-lg font-normal'>
                    Kami menawarkan layanan pembuatan website dan desain grafis berkualitas dengan harga terbaik untuk Anda.
                </p>
            </div>
            <div className="flex justify-center gap-4">
                <button
                    className={`px-6 py-2 border rounded-lg ${category === 'website' ? 'bg-gray-700' : 'border-gray-700 hover:bg-gray-800'}`}
                    onClick={() => setCategory("website")}>
                    Website
                </button>
                <button
                    className={`px-6 py-2 border rounded-lg ${category === 'desain' ? 'bg-gray-700' : 'border-gray-700 hover:bg-gray-800'}`}
                    onClick={() => setCategory("desain")}>
                    Desain
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePlans.map((plan, index) => (
                    <div key={index} className="bg-black/40 backdrop-blur-lg py-6 px-4 rounded-2xl shadow-lg border border-gray-700">
                        <h3 className="text-xl font-semibold">{plan.title}</h3>
                        <p className="text-4xl font-bold my-3">{plan.price}</p>
                        <p className="text-gray-400 mb-4 h-auto md:h-20">{plan.description}</p>
                        <Link to="https://wa.me/6285282932422" target="_blank" className="w-full py-2.5 relative rounded-xl group overflow-hidden font-medium bg-purple-50 text-blue-800 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-800 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Hubungi Kami</span>
                        </Link>
                        <ul className="mt-4 text-left text-gray-300">
                            {Array.isArray(plan.feature)
                                ? plan.feature.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm gap-2 py-1">
                                        <FaCheckCircle className="text-green-500" />
                                        {feature}
                                    </li>
                                ))
                                : JSON.parse(plan.feature || "[]").map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm gap-2 py-1">
                                        <FaCheckCircle className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                        </ul>

                    </div>
                ))}
            </div>
            {filteredPlans.length > 3 && (
                <button onClick={toggleView} className="mt-6 px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                    {expanded ? "Less More" : "View More"}
                </button>
            )}
        </div>
    );
}