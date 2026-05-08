export default function GameTopupWebsite() {
  const games = [
    {
      name: 'Mobile Legends',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Free Fire',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'PUBG Mobile',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Valorant',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const nominal = [
    '86 Diamond - Rp20.000',
    '172 Diamond - Rp40.000',
    '257 Diamond - Rp60.000',
    '344 Diamond - Rp80.000',
    '429 Diamond - Rp100.000'
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            TOPUP<span className="text-cyan-400">GAME</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#games" className="hover:text-cyan-400 transition">Game</a>
            <a href="#topup" className="hover:text-cyan-400 transition">Top Up</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-semibold mb-4">
              Website Top Up Game Modern
            </p>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Top Up Game
              <span className="block text-cyan-400">Cepat & Murah</span>
            </h2>

            <p className="text-zinc-300 text-lg mb-8 max-w-xl">
              Website top up game responsive menggunakan React + Tailwind.
              Cocok untuk upload ke GitHub dan deploy gratis di Vercel atau Netlify.
            </p>

            <div className="flex gap-4">
              <a
                href="#topup"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Top Up Sekarang
              </a>

              <a
                href="#games"
                className="border border-zinc-700 hover:border-cyan-400 transition px-6 py-3 rounded-2xl"
              >
                Lihat Game
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-cyan-400 transition hover:-translate-y-1 duration-300"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg">{game.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Top up aman dan instant
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Game Populer</h2>
            <p className="text-zinc-400 mt-2">
              Pilih game favorit kamu
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition"
            >
              <img
                src={game.image}
                alt={game.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-3 rounded-xl font-semibold">
                  Top Up
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="topup" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Form Top Up
          </h2>

          <div className="grid gap-6">
            <div>
              <label className="block mb-2 text-zinc-300">User ID</label>
              <input
                type="text"
                placeholder="Masukkan User ID"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-zinc-300">Pilih Nominal</label>
              <select className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400">
                {nominal.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-zinc-300">Metode Pembayaran</label>
              <select className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400">
                <option>DANA</option>
                <option>OVO</option>
                <option>GoPay</option>
                <option>QRIS</option>
              </select>
            </div>

            <button className="bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-2xl text-lg font-bold">
              Bayar Sekarang
            </button>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-zinc-800 py-8 text-center text-zinc-400"
      >
        <p>© 2026 TopUpGame. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Dibuat menggunakan React + Tailwind CSS
        </p>
      </footer>
    </div>
  )
}
