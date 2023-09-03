import { Tab } from "@headlessui/react";
import { cn } from "../../../utils";
import { ReactNode } from "react";

// Migrate the content object to props later for reusability

interface Props {
    contents: Record<string, string | ReactNode | JSX.Element>;
}

const TabHeader = ({ contents }: Props) => {
    return (
        <Tab.List className="flex space-x-1 border-b">
            {Object.keys(contents).map((tab) => (
                <Tab
                    key={tab}
                    className={({ selected }) =>
                        cn(
                            "py-2.5 px-3 text-sm leading-5 text-gray-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                            {
                                "bg-white font-medium border-b-2 border-gray-700":
                                    selected,
                                "text-gray-300 font-normal hover:text-gray-700":
                                    !selected,
                            }
                        )
                    }
                >
                    {tab}
                </Tab>
            ))}
        </Tab.List>
    );
};

const TabContents = ({ contents }: Props) => {
    return (
        <Tab.Panels className="mt-2">
            {Object.values(contents).map((tabContent, idx) => (
                <Tab.Panel
                    key={idx}
                    className="rounded-xl bg-white p-3 ring-white ring-opacity-60"
                >
                    {tabContent}
                </Tab.Panel>
            ))}
        </Tab.Panels>
    );
};

export const Tabs = ({ contents }: Props) => {
    return (
        <Tab.Group>
            <TabHeader contents={contents} />
            <TabContents contents={contents} />
        </Tab.Group>
    );
};
