export default function Footer() {
    return (
        <footer className="py-12 border-t border-neutral-900 bg-neutral-950">
            <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-black text-white tracking-tighter">HACA</div>
                        <div className="h-4 w-[1px] bg-neutral-700" />
                        <div className="text-sm font-medium text-neutral-400">Design School</div>
                    </div>

                    <div className="flex gap-8 text-sm text-neutral-400 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Curriculum</a>
                        <a href="#" className="hover:text-white transition-colors">Tuition</a>
                        <a href="#" className="hover:text-white transition-colors">FAQ</a>
                        <a href="#" className="hover:text-white transition-colors">Apply</a>
                    </div>

                    <div className="text-sm text-neutral-500">
                        © {new Date().getFullYear()} HACA Design School.
                    </div>

                </div>
            </div>
        </footer>
    )
}
