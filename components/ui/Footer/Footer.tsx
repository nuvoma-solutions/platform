import {Github, LinkedIn, TwitterX} from "@/components/icons/LinkedIn";

const Footer = () => {

    return (
        <footer className="mt-20">
            <div className="custom-screen">
                <div className="mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex">
                    <p className="text-gray-400 text-center font-neulisalt">© 2025 Nuvoma Solutions.</p>
                    <div className="flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
                        <a href="/public" target="_blank" aria-label="social media">
                            <LinkedIn className="w-6 h-6 hover:text-gray-200 duration-150" />
                        </a>
                        <a href="/public" target="_blank" aria-label="social media">
                            <Github className="w-6 h-6 hover:text-gray-200 duration-150" />
                        </a>
                        <a href="/public" target="_blank" aria-label="social media">
                            <TwitterX className={"w-6 h-6 hover:text-gray-200 duration-150"} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer