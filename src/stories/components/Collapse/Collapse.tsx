import { ReactNode, useState } from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { FiChevronUp as ArrowUpIcon } from "react-icons/fi";

export interface CollapseProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    content: ReactNode;
    children: ReactNode;
    disabled?: boolean;
}

export const Collapse = ({
    content,
    children,
    disabled = false,
}: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onCollapse = () => {
        if (disabled) return;
        setIsOpen((p) => !p);
    };
    return (
        <Card padding="tiny">
            <div className="flex items-start gap-3">
                <div className="col-span-full md:col-span-1">
                    <Button
                        variant="transparent"
                        className="p-0 m-0"
                        onClick={onCollapse}
                        disabled={disabled}
                    >
                        <div className="flex items-center justify-center w-8 h-8 border border-black rounded-full click:border-brand-secondary ">
                            <ArrowUpIcon
                                className={`transition duration-200 ease-in-out ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                    </Button>
                </div>
                <div className="w-full">{content}</div>
            </div>
            {isOpen && <div className="p-4">{children}</div>}
        </Card>
    );
};
