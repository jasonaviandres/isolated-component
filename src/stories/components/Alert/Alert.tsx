import { Dialog } from "@headlessui/react";
import { Modal } from "../Modal/Modal";

export interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    text: string;
    title: string;
}

/**
 * An alert component
 * Usage: Import both the `Alert` component and `useAlert` hook into your own components.
 * Hook:
 * const { openAlert, alertProps } = useAlert()
 * Render:
 * <Alert {...alertProps} />
 */
export const Alert = ({ isOpen, setIsOpen, text, title }: Props) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="px-4 pt-5 pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        {title && (
                            <Dialog.Title
                                as="h2"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {title}
                            </Dialog.Title>
                        )}
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
