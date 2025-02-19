import Image from "next/legacy/image";

interface AuthorsProps {
  authors: string[];
}

const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  return (
    <div className="relative flex items-center space-x-2">
      {authors.map((author, index) => (
        <div
          key={index}
          className="relative w-10 h-10 rounded-full overflow-hidden z-10"
          style={{ left: `-${index * 24}px` }}
        >
          <a
            href={`https://github.com/${author}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src={`https://github.com/${author}.png`}
              alt={author}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Authors;