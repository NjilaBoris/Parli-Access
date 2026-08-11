"use client"
import { motion, type Variants, type Transition } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
  followers?: string;
}

interface Article {
  id: string;
  category: string;
  headline: string;
  excerpt?: string;
  image: string;
  author: Author;
  time: string;
}

const heroArticle: Article = {
  id: "fury-usyk",
  category: "Sport",
  headline: "Will he retire? One more loss and Fury is finished!",
  excerpt:
    'The Usyk vs. Fury fight is on the horizon, but will it be the last for the "Gypsy King"? Tyson Fury, who recently narrowly escaped defeat in his last fights, is now facing the toughest challenge of his career — a confrontation with the undefeated Oleksandr Usyk.',
  image:
    "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1600&auto=format&fit=crop",
  author: { name: "Adam Strong", avatar: "https://i.pravatar.cc/64?img=12" },
  time: "10:00 AM, Today",
};

const sideArticles: Article[] = [
  {
    id: "exoplanet",
    category: "Science",
    headline: "Astronomers discover new exoplanet in habitable zone",
    image:
      "https://images.unsplash.com/photo-1544164559-d685448b7f45?q=80&w=400&auto=format&fit=crop",
    author: { name: "Mary Frost", avatar: "https://i.pravatar.cc/64?img=47" },
    time: "10:00 AM, Today",
  },
  {
    id: "renewable-storage",
    category: "Economy",
    headline: "Scientists have developed a new method of storing renewable energy",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400&auto=format&fit=crop",
    author: { name: "Lucas Ray", avatar: "https://i.pravatar.cc/64?img=33" },
    time: "1:00 PM, Today",
  },
  {
    id: "vaccine",
    category: "Health",
    headline: "New vaccine against a rare disease has been successfully tested",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400&auto=format&fit=crop",
    author: { name: "Adam Strong", avatar: "https://i.pravatar.cc/64?img=12" },
    time: "6:00 PM, Today",
  },
];

const trendingAuthors: Author[] = [
  { name: "Adam Strong", avatar: "https://i.pravatar.cc/64?img=12", followers: "14.3K followers" },
  { name: "Samantha Hayes", avatar: "https://i.pravatar.cc/64?img=45", followers: "18.7K followers" },
];

interface BylineProps {
  author: Author;
  category: string;
  time: string;
  className?: string;
}

function Byline({ author, category, time, className = "" }: BylineProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-neutral-500 ${className}`}
    >
      <span className="flex items-center gap-2">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-5 w-5 sm:h-6 sm:w-6 rounded-full object-cover"
        />
        <span className="font-medium text-neutral-800">{author.name}</span>
      </span>
      <span className="text-neutral-300">|</span>
      <span>{category}</span>
      <span className="ml-auto whitespace-nowrap text-neutral-400">{time}</span>
    </div>
  );
}

interface HeroArticleProps {
  article: Article;
}

const heroEntranceTransition: Transition = { duration: 0.5, ease: "easeOut" };
const heroImageTransition: Transition = { duration: 0.6, ease: "easeOut" };
const heroImageVariants: Variants = { rest: { scale: 1 }, hover: { scale: 1.04 } };

function HeroArticle({ article }: HeroArticleProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={heroEntranceTransition}
    >
      <motion.div
        className="relative w-full overflow-hidden rounded-xl bg-neutral-900 aspect-video lg:aspect-[4/3]"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.img
          src={article.image}
          alt={article.headline}
          variants={heroImageVariants}
          transition={heroImageTransition}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      <div className="mt-3 sm:mt-4">
        <Byline author={article.author} category={article.category} time={article.time} />
      </div>

      <h1 className="mt-2 sm:mt-3 font-extrabold tracking-tight text-neutral-900 text-2xl sm:text-3xl lg:text-4xl leading-tight">
        {article.headline}
      </h1>

      {article.excerpt && (
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-500">
          {article.excerpt}
        </p>
      )}

      <a
        href="#"
        className="mt-2 inline-block text-sm sm:text-base font-bold text-neutral-900 underline decoration-2 underline-offset-2 hover:text-neutral-600"
      >
        read more
      </a>
    </motion.article>
  );
}

interface ArticleRowProps {
  article: Article;
  index: number;
}

function ArticleRow({ article, index }: ArticleRowProps) {
  const rowTransition: Transition = { duration: 0.4, delay: index * 0.08, ease: "easeOut" };
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={rowTransition}
      className="group flex gap-3 sm:gap-4 py-4 first:pt-0"
    >
      <div className="relative h-16 w-20 sm:h-18 sm:w-22 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={article.image}
          alt={article.headline}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm sm:text-base font-bold leading-snug text-neutral-900 group-hover:text-neutral-600 line-clamp-2">
          {article.headline}
        </h3>
        <Byline
          author={article.author}
          category={article.category}
          time={article.time}
          className="mt-1.5 sm:mt-2"
        />
      </div>
    </motion.a>
  );
}

interface TrendingAuthorsProps {
  authors: Author[];
}

function TrendingAuthors({ authors }: TrendingAuthorsProps) {
  return (
    <section className="pt-6">
      <h2 className="text-lg sm:text-xl font-extrabold text-neutral-900">Trending authors</h2>

      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
        {authors.map((author, i) => (
          <motion.a
            href="#"
            key={author.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            whileHover={{ y: -2 }}
            className="group flex items-center gap-3"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-1 text-sm font-semibold text-neutral-900">
                {author.name}
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">{author.followers}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default function NewsHomepage() {
  return (
    <div className="w-full bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          <HeroArticle article={heroArticle} />

          <aside className="lg:pl-8 lg:border-l lg:border-neutral-200">
            <div className="divide-y divide-neutral-200">
              {sideArticles.map((article, i) => (
                <ArticleRow key={article.id} article={article} index={i} />
              ))}
            </div>
            <div className="mt-2 border-t border-neutral-200">
              <TrendingAuthors authors={trendingAuthors} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}