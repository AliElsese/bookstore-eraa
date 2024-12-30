import useGetCategories from "../../hooks/GetCategoriesHook"

export default function Categories({ onSelectCategory }) {
    const { categories } = useGetCategories();

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">Categories</h2>
            <div className="mb-8 flex items-center">
                <select name="category" id="category"
                onChange={(e) => onSelectCategory(e.target.value)}
                className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                    <option value="All">All</option>
                    {
                        categories.map((category, index) => {
                            return (
                                <option value={category.categoryId} key={category.categoryId}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}