import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLock, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "./Badge";

export function Card(props: {
  title: string;
  description: string;
  tags: string[];
  icon: IconDefinition;
  children?: ReactNode;
  githubName?: string;
}) {
  return (
    <div className="p-4 shadow-md border border-purple-400 relative shadow-purple-500/10 w-[78] rounded-md flex flex-col">
      <div>
        <div className="flex">
          <FontAwesomeIcon
            className="dark:text-white text-xl my-auto mr-2"
            icon={props.icon}
          />
          <h1 className="font-semibold text-xl dark:text-white">
            {props.title}
          </h1>
        </div>
        <p className="dark:text-gray-300 text-sm">{props.description}</p>
      </div>
      <div className="flex flex-wrap mt-2 gap-2">
        {props.tags.map((tag, ind) => {
          return (
            <Badge key={ind} className="text-sm">
              {tag}
            </Badge>
          );
        })}
      </div>
      <div className="h-1 w-full" />
      <div className="mt-auto -mb-1">
        {props.githubName ? (
          <a
            target="_blank"
            href={`https://github.com/Maruquitus/${props.githubName}`}
            className="dark:bg-black rounded-full w-8 h-8 duration-300 hover:scale-105 cursor-pointer flex items-center justify-center float-right"
          >
            <FontAwesomeIcon className="h-6 dark:text-white" icon={faGithub} />
          </a>
        ) : (
          <abbr
            title="Repositório privado"
            className="flex h-8 w-8 float-right"
          >
            <FontAwesomeIcon
              className="h-5 dark:text-white m-auto"
              icon={faLock}
            />
          </abbr>
        )}
      </div>
    </div>
  );
}
