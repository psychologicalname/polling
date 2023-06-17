export default function Home() {
    return (
    <main className="h-full flex items-center justify-center bg-gray-100 py-14">
        <div className="h-fit bg-white rounded-lg shadow-lg p-8 max-w-prose">
            <h5 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-800">Noteworthy technology acquisitions 2021</h5>
            <div>
                <div class="flex items-center px-4 mb-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <input id="option-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="option-1" class="w-full py-4 ml-2 text-base font-medium text-gray-400 dark:text-gray-900">Option 1</label>
                </div>
                <div class="flex items-center px-4 mb-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <input id="option-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="option-2" class="w-full py-4 ml-2 text-base font-medium text-gray-400 dark:text-gray-900">Option-2</label>
                </div>
            </div>
            <div className="flex justify-start">
            <button
              type="button"
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </div>
    </main>
)
}
