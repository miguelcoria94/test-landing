<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-10 pb-12 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-hkgrotesk mb-4">
            Let's find the right plan for you business
          </h2>
          <p class="text-xl text-slate-500">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est.
          </p>
        </div>

        <!-- Pricing tables -->
        <div class="grid md:grid-cols-6">
          <!-- Pricing toggle -->
          <div
            class="flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          ></div>

          <!-- Starter price -->
          <div
            class="flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none md:text-center mt-6 md:mt-0"
          >
            <div class="font-hkgrotesk text-lg font-bold text-green-500 mb-0.5">
              Starter
            </div>
          </div>

          <!-- Agency price -->
          <div
            class="flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none md:text-center mt-6 md:mt-0"
          >
            <div class="font-hkgrotesk text-lg font-bold text-green-500 mb-0.5">
              Advantage
            </div>
          </div>

          <!-- Team price -->
          <div
            class="flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none md:text-center mt-6 md:mt-0"
          >
            <div class="font-hkgrotesk text-lg font-bold text-green-500 mb-0.5">
              Enterprise
            </div>
          </div>

          <!-- Usage label -->
          <div
            class="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:col-span-3"
          >
            <span class="text-xs uppercase font-semibold text-slate-500"
              >Usage</span
            >
          </div>
          <div
            class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:border-l border-slate-300 order-1 md:order-none"
          >
            <span
              class="md:hidden text-xs uppercase font-semibold text-slate-500"
              >Usage</span
            >
          </div>
          <div
            class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none"
          >
            <span
              class="md:hidden text-xs uppercase font-semibold text-slate-500"
              >Usage</span
            >
          </div>
          <div
            class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:border-l border-slate-300 order-3 md:order-none"
          >
            <span
              class="md:hidden text-xs uppercase font-semibold text-slate-500"
              >Usage</span
            >
          </div>

          <!-- Admins & Members -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">User Types</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">User Types</div>
            <div class="text-sm font-medium text-slate-500 text-center">4</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-green-200">User Types</div>
            <div class="text-sm font-medium text-slate-500 text-center">5</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-green-200">User Types</div>
            <div class="text-sm font-medium text-slate-500 text-center">5+</div>
          </div>

          <!-- File Storage -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">Storage</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Storage</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              10GB
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Storage</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              30GB
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Storage</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              60GB
            </div>
          </div>

          <!-- Active Users -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">Active Users</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Active Users</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              &lt;1500
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Active Users</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              &#62;1500
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Active Users</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              &#62;5000
            </div>
          </div>

          <!-- Features label -->
          <div
            class="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:col-span-3"
          >
            <span class="text-xs uppercase font-semibold text-slate-500"
              >Features</span
            >
          </div>
          <div
            class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:border-l border-slate-300 order-1 md:order-none"
          >
            <span
              class="md:hidden text-xs uppercase font-semibold text-slate-500"
              >Features</span
            >
          </div>
          <div
            class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none"
          >
            <span
              class="md:hidden text-xs uppercase font-semibold text-slate-500"
              >Features</span
            >
          </div>
          <div
            class="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-500 bg-opacity-25 md:border-l border-slate-300 order-3 md:order-none"
          >
            <span
              class="md:hidden text-xs uppercase font-semibold text-slate-500"
              >Features</span
            >
          </div>

          <!-- All Account Types -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">All Account Types</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">All Account Types</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">All Account Types</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">All Account Types</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Resource Management -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">Resource Management</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Resource Management</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Resource Management</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Resource Management</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Appointment Synchronization -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">Appointment Synchronization</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Appointment Synchronization
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Appointment Synchronization
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Appointment Synchronization
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Safety Tools -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">Mental Health Safety Tool</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Mental Health Safety Tool
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Mental Health Safety Tool
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Mental Health Safety Tool
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- SSO intergration -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">SSO Integration</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">SSO Integration</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">SSO Integration</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">SSO Integration</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Behavoral Health Content -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">Behavioral Health Content</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Behavioral Health Content
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Behavioral Health Content
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Behavioral Health Content
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Email Notifications -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">Email Notifications</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Email Notifications</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Email Notifications</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Email Notifications</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- SMS Notifications  -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">SMS Notifications</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">SMS Notifications</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-slate-500"
                width="14"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">SMS Notifications</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">SMS Notifications</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Calendar Integration  -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">Calendar Integration</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Calendar Integration</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-slate-500"
                width="14"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Calendar Integration</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Calendar Integration</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Smart Resource Library  -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">Smart Resource Library</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Smart Resource Library</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-slate-500"
                width="14"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Smart Resource Library</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Smart Resource Library</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Analytics & Trends  -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">Analytics & Trends</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">Analytics & Trends</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-slate-500"
                width="14"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">Analytics & Trends</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">Analytics & Trends</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- Professional Activity Log   -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:col-span-3"
          >
            <div class="text-slate-500">Professional Activity Log</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Professional Activity Log
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-slate-500"
                width="14"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Professional Activity Log
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">
              Professional Activity Log
            </div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- White Label  -->
          <div
            class="hidden md:flex flex-col justify-center p-4 md:px-6 bg-slate-200 md:col-span-3"
          >
            <div class="text-slate-500">White Label</div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-1 md:order-none"
          >
            <div class="md:hidden text-slate-500">White Label</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-slate-500"
                width="14"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 0v2H0V0z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-2 md:order-none"
          >
            <div class="md:hidden text-slate-500">White Label</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
          <div
            class="flex justify-between md:flex-col md:justify-center p-4 md:px-6 bg-slate-200 md:border-l border-slate-300 order-3 md:order-none"
          >
            <div class="md:hidden text-slate-500">White Label</div>
            <div class="text-sm font-medium text-slate-500 text-center">
              <svg
                class="inline-flex fill-mint-400"
                width="12"
                height="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <!-- CTA row -->
          <div
            class="hidden md:flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-100 bg-opacity-25 md:col-span-3"
          ></div>
          <div
            class="flex flex-col justify-center p-4 bg-slate-100 bg-opacity-25 md:border-l border-slate-300 order-1 md:order-none"
          >
            <a
              class="btn-sm text-white bg-green-500 hover:bg-green-400 w-full shadow-sm group whitespace-nowrap"
              href="#0"
            >
              Take The Quiz
            </a>
          </div>
          <div
            class="flex flex-col justify-center p-4 bg-slate-100 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none"
          >
            <a
              class="btn-sm text-white bg-green-500 hover:bg-green-400 w-full shadow-sm group whitespace-nowrap"
              href="#0"
            >
              Take The Quiz
            </a>
          </div>
          <div
            class="flex flex-col justify-center p-4 bg-slate-100 bg-opacity-25 md:border-l border-slate-300 order-3 md:order-none"
          >
            <a
              class="btn-sm text-white bg-green-500 hover:bg-green-400 w-full shadow-sm group whitespace-nowrap"
              href="#0"
            >
              Take The Quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Pricing",
  setup() {
    const annual = ref(true);

    return {
      annual,
    };
  },
};
</script>
