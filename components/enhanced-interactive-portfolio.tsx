'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, XIcon, CodeIcon, PaletteIcon, ServerIcon, DatabaseIcon, FigmaIcon, LayersIcon, BoxIcon, CloudIcon, HomeIcon, FolderIcon, AwardIcon, HeartIcon, MoonIcon, SunIcon, ChevronRightIcon } from 'lucide-react'

export function EnhancedInteractivePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  const navItems = [
    { name: 'ホーム', icon: <HomeIcon size={20} /> },
    { name: 'プロジェクト', icon: <FolderIcon size={20} /> },
    { name: 'スキル', icon: <AwardIcon size={20} /> },
    { name: '趣味', icon: <HeartIcon size={20} /> },
  ]

  const skills = [
    { name: 'React', icon: <CodeIcon size={32} />, level: 90 },
    { name: 'TypeScript', icon: <CodeIcon size={32} />, level: 85 },
    { name: 'Node.js', icon: <ServerIcon size={32} />, level: 80 },
    { name: 'GraphQL', icon: <DatabaseIcon size={32} />, level: 75 },
    { name: 'Figma', icon: <FigmaIcon size={32} />, level: 85 },
    { name: 'Tailwind CSS', icon: <PaletteIcon size={32} />, level: 90 },
    { name: 'Next.js', icon: <LayersIcon size={32} />, level: 80 },
    { name: 'AWS', icon: <CloudIcon size={32} />, level: 70 }
  ]

  const hobbies = [
    { name: '写真撮影', description: '街の風景や自然の美しさを捉えるのが好きです。' },
    { name: 'ヨガ', description: '心身のバランスを整え、ストレス解消に役立っています。' },
    { name: '料理', description: '新しいレシピに挑戦し、友人や家族と共有するのが楽しみです。' },
    { name: '読書', description: 'SF小説や技術書を読んで、想像力と知識を広げています。' }
  ]

  const [activeProject, setActiveProject] = useState(0)
  const projects = [
    { title: "プロジェクト 1", description: "革新的なウェブアプリケーションの詳細な説明がここに入ります。" },
    { title: "プロジェクト 2", description: "最新のテクノロジーを活用したモバイルアプリの開発プロジェクトです。" },
    { title: "プロジェクト 3", description: "AIを活用したデータ分析ツールの設計と実装を行いました。" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-purple-600"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-t-4 border-white rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          opacity: isDarkMode ? 0.2 : 0.8
        }}
      />

      <div className="relative z-10">
        <header className={`fixed w-full z-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}
            >
              山田太郎
            </motion.h1>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name}`}
                  whileHover={{ scale: 1.1 }}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors flex items-center space-x-2`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </header>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} z-20 flex items-center justify-center`}
          >
            <nav className="flex flex-col space-y-8 text-2xl">
              {navItems.map((item) => (
                <a key={item.name} href={`#${item.name}`} onClick={() => setIsMenuOpen(false)} className={`${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors flex items-center space-x-4`}>
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}

        <main className="container mx-auto px-4 pt-24">
          <section id="ホーム" className="min-h-screen flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -top-40 -left-40 w-80 h-80 border-4 border-purple-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -bottom-40 -right-40 w-96 h-96 border-4 border-purple-300 rounded-full opacity-20"
              />
              <h2 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>こんにちは、山田太郎です</h2>
              <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>フロントエンド開発者 & UIデザイナー</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${isDarkMode ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'} text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
              >
                <span className="flex items-center space-x-2">
                  <FolderIcon size={20} />
                  <span>プロジェクトを見る</span>
                </span>
              </motion.button>
            </motion.div>
          </section>

          <section id="プロジェクト" className="py-20">
            <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <FolderIcon size={36} className={`mr-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              プロジェクト
            </h2>
            <div className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeProject ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={`https://images.unsplash.com/photo-${1550000000000 + index}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80`} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-lg mb-4 text-gray-200">{project.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2"
                      >
                        <span>詳細を見る</span>
                        <ChevronRightIcon size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="スキル" className="py-20">
            <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <AwardIcon size={36} className={`mr-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              スキル
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 flex items-center space-x-4 shadow-md`}
                >
                  <div className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>{skill.icon}</div>
                  <div className="flex-grow">
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{skill.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-purple-600 h-2.5"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="趣味" className="py-20">
            <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <HeartIcon size={36} className={`mr-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              趣味
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-md`}
                >
                  <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{hobby.name}</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-6 mt-20 shadow-md transition-colors duration-300`}>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0`}>&copy; 2023 山田太郎. All rights reserved.</p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ y: -5 }} className={`${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                <GithubIcon size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }} className={`${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                <LinkedinIcon size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }} className={`${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                <MailIcon size={24} />
              </motion.a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}