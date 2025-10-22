export default function SearchForm() {
  return (
      <div className="flex justify-center px-4 py-10 bg-[url(banner.webp)] bg-center ">
        <div className=" bg-gray-700 w-full max-w-5xl mx-auto rounded-3xl p-8 shadow-lg">
          <p className="text-4xl text-center text-white font-semibold mb-8">
            Search Listing
          </p>
{/* class="bg-[url(/img/mountains.jpg)] */}
          <div>
            <form className="space-y-6 text-white">
              {/* Location and Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="location" className="mb-2 font-medium">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>California</option>
                    <option>Las Vegas</option>
                    <option>Washington</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="type" className="mb-2 font-medium">
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Apartments</option>
                    <option>Villas</option>
                    <option>Mansions</option>
                  </select>
                </div>
              </div>

              {/* Rooms and Prices */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="rooms" className="mb-2 font-medium">
                    Rooms
                  </label>
                  <input
                    defaultValue={2}
                    type="number"
                    id="rooms"
                    name="rooms"
                    min="0"
                    className="rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="minPrice" className="mb-2 font-medium">
                    Minimum Price
                  </label>
                  <input
                    defaultValue={1000}
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    min="0"
                    className="rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="maxPrice" className="mb-2 font-medium">
                    Maximum Price
                  </label>
                  <input
                    defaultValue={10000}
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    min="0"
                    className="rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center w-full">
                <button className="w-full bg-pastel hover:bg-blue-700 bg-blue-600 text-white font-semibold px-8 py-3 rounded-4xl">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
