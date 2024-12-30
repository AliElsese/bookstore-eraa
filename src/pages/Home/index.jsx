import { useState } from "react";
import Books from "../../components/Books";
import Categories from "../../components/Categories";

export default function Home() {
    const [selectedCategoryId, setSelectedCategoryId] = useState('All');

    const handleSelectCategory = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    
    return (
        <div className="max-w-screen-2xl px-4 py-10">
            <div className="container mx-auto">
                <Categories onSelectCategory={handleSelectCategory} />

                <div>
                    <Books categoryId={selectedCategoryId} />
                </div>

            </div>
        </div>
    )
}
