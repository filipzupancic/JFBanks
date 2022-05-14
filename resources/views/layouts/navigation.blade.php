<!-- This example requires Tailwind CSS v2.0+ -->

<header id="header-wrapper">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-grey-500 lg:border-none">
            <div class="flex items-center">
                <a href="/">
                    <span class="sr-only">Workflow</span>
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="">
                </a>
                <div class="hidden ml-10 space-x-8 lg:block">
                    <a href="/kredit" class="font-medium text-gray-900 hover:text-gray-500">KREDIT</a>
                </div>
                <div class="hidden ml-10 space-x-8 lg:block">
                    <a href="/stroski" class="font-medium text-gray-900 hover:text-gray-500">STROŠKI</a>
                </div>
                <div class="hidden ml-10 space-x-8 lg:block">
                    <a href="/nalozbe" class="font-medium text-gray-900 hover:text-gray-500">NALOŽBE</a>
                </div>
                <div class="hidden ml-10 space-x-8 lg:block">
                    <a href="/eko" class="font-medium text-gray-900 hover:text-gray-500">EKO</a>
                </div>
            </div>

            <div class="flex-1 flex items-center justify-end">
                <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                        <div class="flex">
                            <a href="/denarnica" class="-m-2 p-2">
                                <button type="button" class="bg-white p-1 rounded-full text-gray-900 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <span class="sr-only">Denarnica</span>
                                    <!-- Heroicon name: outline/wallet -->
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                </button>
                            </a>
                        </div>

                        <div class="flex">
                            <a href="/koledar" class="-m-2 p-2">
                                <button type="button" class="bg-white p-1 rounded-full text-gray-900 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <span class="sr-only">Koledar</span>
                                    <!-- Heroicon name: outline/calendar -->
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </button>
                            </a>
                        </div>
                        <div class="flex">
                            <a href="/obvestila" class="-m-2 p-2">
                                <button type="button" class="bg-white p-1 rounded-full text-gray-900 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <span class="sr-only">Obvestila</span>
                                    <!-- Heroicon name: outline/bell -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

                    <!-- Dark mode switcher -->
                    <!-- <button id="theme-toggle" type="button" class="bg-white p-1 rounded-full text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                        <svg id="theme-toggle-light-icon" class="hidden w-6 h-6" fill="#eab308" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <svg id="theme-toggle-dark-icon" class="hidden w-6 h-6" fill="rgb(37 99 235)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </button> -->
                    <!-- Dark mode switcher end -->
                </div>
            </div>
            <div class="relative">
                <div class="flex px-4">
                    <a href="/profil" class="-m-2 p-2">
                        <button type="button" class="bg-white p-1 rounded-full text-emerald-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="sr-only">Profil</span>
                            <!-- Heroicon name: outline/bell -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <a href="/kredit" class="text-base font-medium text-blue-500 hover:text-gray-900"> KREDIT </a>
            <a href="/stroski" class="text-base font-medium text-blue-500 hover:text-gray-900"> STROŠKI </a>
            <a href="/nalozbe" class="text-base font-medium text-blue-500 hover:text-gray-900"> NALOŽBE </a>
            <a href="/eko" class="text-base font-medium text-blue-500 hover:text-gray-900"> EKO </a>
        </div>
    </nav>
</header>
<script src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js" charset="utf-8"></script>
<script>

</script>