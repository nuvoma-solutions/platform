import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavHeader from '@/components/ui/NavHeader/NavHeader'
import NavLink from '@/components/ui/NavLink/NavLink'
import "@/app/globals.css";

const Navbar = () => {
    const [state, setState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const menuBtnEl = useRef(null)

    const navigation = [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "The Team", href: "/#team" },
    ]

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node
            if (menuBtnEl.current && !(menuBtnEl.current as Node).contains(target)) {
                setState(false)
            }
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        document.addEventListener("click", handleClickOutside)
        window.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("click", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            {/* Desktop Pill Header */}
            <div className="hidden lg:block">
                <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out max-w-6xl ${isScrolled ? 'w-[75%] scale-95' : 'w-[95%] scale-100'}`}>
                    <div className="backdrop-blur-xl bg-gray-900/70 border border-gray-700/30 rounded-4xl px-8 shadow-2xl ring-1 ring-white/10 font-neulisalt transition-all duration-500 ease-out">
                        <nav className="md:text-sm">
                            <div className="items-center flex">
                                <NavHeader state={state} onClick={() => setState(!state)} menuBtnEl={undefined} />
                                <div className="flex-1 items-center text-gray-300 md:font-medium flex ml-8">
                                    <ul className="flex-1 justify-center items-center flex space-x-8">
                                        {navigation.map((item, idx) => {
                                            return (
                                                <li key={idx} className="hover:text-gray-50 transition-colors duration-200">
                                                    <Link href={item.href} className="block font-semibold text-md py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="gap-x-6 items-center justify-end flex">
                                        <Link href="" className="block hover:text-gray-50 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10">
                                            Sign in
                                        </Link>
                                        <NavLink href="" className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 inline-flex transition-all duration-200 hover:scale-105 px-4 py-2 rounded-lg">
                                            Start now
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Floating Pill - iOS Optimized */}
            <div className="lg:hidden">
                {/* Floating Pill Header - Optimized for iPhone */}
                <div
                    className="fixed top-4 left-1/2 z-50"
                    style={{
                        transform: 'translateX(-50%)',
                        width: isScrolled ? '85%' : '90%',
                        transition: 'width 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                        willChange: 'width'
                    }}
                >
                    <div
                        className="bg-gray-900/70 border border-gray-700/30 rounded-4xl px-8 py-0 shadow-2xl ring-1 ring-white/10"
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                            willChange: 'transform'
                        }}
                    >
                        <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
                    </div>
                </div>

                {/* Mobile Dropdown Menu - iOS Optimized */}
                <div className={`
                    fixed top-24 left-1/2 w-[90%] z-40
                    transition-all duration-300 ease-out
                    ${state ?
                    'opacity-100 translate-y-0' :
                    'opacity-0 -translate-y-4 pointer-events-none'
                }
                `}
                     style={{
                         transform: `translateX(-50%) ${state ? 'translateY(0)' : 'translateY(-1rem)'}`,
                         willChange: 'opacity, transform'
                     }}>
                    {/* Background with optimized blur for iOS */}
                    <div
                        className="absolute inset-0 rounded-2xl bg-gray-900/70 border border-gray-700/40 shadow-2xl ring-1 ring-white/5"
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)'
                        }}
                    ></div>

                    <div className="relative p-4">
                        <div className="text-gray-300">
                            <ul className="space-y-4">
                                {navigation.map((item, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className={`
                                                hover:text-gray-50 transition-all duration-200
                                                ${state ?
                                                'opacity-100 translate-x-0' :
                                                'opacity-0 -translate-x-4'
                                            }
                                            `}
                                            style={{
                                                transitionDelay: state ? `${idx * 50 + 100}ms` : '0ms',
                                                willChange: 'opacity, transform'
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                className="font-neulis block font-semibold text-lg py-2 px-2 hover:bg-white/10 rounded-lg transition-all duration-200 border border-transparent hover:border-white/20"
                                                style={{
                                                    backdropFilter: 'blur(10px)',
                                                    WebkitBackdropFilter: 'blur(10px)'
                                                }}
                                                onClick={() => setState(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className={`
                                mt-6 mb-2 space-y-3
                                transition-all duration-300 ease-out
                                ${state ?
                                'opacity-100 translate-y-0' :
                                'opacity-0 translate-y-2'
                            }
                            `}
                                 style={{
                                     transitionDelay: state ? '250ms' : '0ms',
                                     willChange: 'opacity, transform'
                                 }}>
                                <NavLink
                                    href=""
                                    className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 transition-all duration-200 hover:scale-105 w-full py-3 rounded-lg hover:bg-white/20"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)'
                                    }}
                                    onClick={() => setState(false)}
                                >
                                    Start now
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Backdrop - iOS Optimized */}
                <div className={`
                    fixed inset-0 bg-black/30 z-30
                    transition-opacity duration-300
                    ${state ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                     style={{
                         backdropFilter: 'blur(8px)',
                         WebkitBackdropFilter: 'blur(8px)',
                         willChange: 'opacity'
                     }}
                     onClick={() => setState(false)}
                />
            </div>
        </>
    )
}

export default Navbar