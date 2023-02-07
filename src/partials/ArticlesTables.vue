<template>
  <div class="col-span-full bg-white shadow-lg rounded-sm border border-slate-200 m-4">
    
    <header class="px-5 py-4 border-b border-slate-100">
      <h2 class="font-semibold text-slate-800">All Articles</h2>
    </header>
    <div class="p-3">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm w-full">
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Name</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Uploaded</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-100">
            <!-- Row -->
            <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="font-medium text-slate-800">Article #1</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div>01/12/23</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Manage
                  </button>
              </td>
            </tr>
            <!-- Row -->
            <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="font-medium text-slate-800">Article  #1</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div>01/12/23</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Manage
                  </button>
              </td>
            </tr>
            <!-- Row -->
            <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="font-medium text-slate-800">Article  #1</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div>01/12/23</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Manage
                  </button>
              </td>
            </tr>
            <!-- Row -->
            <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="font-medium text-slate-800">Article  #1</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div>01/12/23</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Manage
                  </button>
              </td>
            </tr>
            <!-- Row -->
            <tr>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="font-medium text-slate-800">Article  #1</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div>01/12/23</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Manage
                  </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlesTable',
}
</script>