import {
    ComponentProps,
    Dispatch,
    InputHTMLAttributes,
    ReactNode,
    SetStateAction,
    useRef,
    useState,
} from "react";
import { Button, Props as ButtonProps } from "../Button/Button";
import { cn } from "../../../utils";
import { QueryClientProvider, useMutation } from "@tanstack/react-query";
import { DEFAULT_QUERY_CLIENT_OPTIONS } from "../constants";
import { Placeholder } from "../Placeholder";

interface StepProps {
    title: ReactNode;
    description?: ReactNode;
    children: ReactNode;
    disabled?: boolean;
    onNext?: () => Promise<unknown> | void;
    onNextLabel?: string;
    showButton?: boolean;
    button?: ButtonProps;
    loading?: boolean;
}

interface StepsProps {
    defaultStep?: number;
    steps?: StepProps[];
    onStepChange?: (step: number) => void;
}

type StepHeaderProps = Pick<StepProps, "title" | "description"> & {
    open: boolean;
    stepNumber: number;
    scrollIntoView: () => void;
    disabled?: boolean;
};

interface StepNumberProps extends ComponentProps<"div"> {
    active: boolean;
}

interface StepContentProps extends ComponentProps<"div"> {
    open: boolean;
}

const StepContainer = ({ children, ...rest }: ComponentProps<"div">) => (
    <div
        className="grid grid-cols-[48px_1fr] items-start gap-4 w-full"
        {...rest}
    >
        {children}
    </div>
);

const StepTitle = ({ children, ...rest }: ComponentProps<"span">) => (
    <span className="text-xl font-bold" {...rest}>
        {children}
    </span>
);

const StepDescription = ({ children, ...rest }: ComponentProps<"span">) => (
    <span className="text-base font-normal text-gray-700" {...rest}>
        {children}
    </span>
);

const StepNumber = ({ children, active = false, ...rest }: StepNumberProps) => {
    const stepNumberClass = cn(
        "w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition duration-100 ease-out",
        {
            "bg-transparent border border-gray-700 text-gray-700": active,
            "bg-brand-ui-primary border border-brand-ui-primary text-white":
                !active,
        }
    );
    return (
        <div className={stepNumberClass} {...rest}>
            {children}
        </div>
    );
};

const StepHeader = ({
    title,
    description,
    open,
    stepNumber,
    scrollIntoView,
    disabled = false,
    ...props
}: StepHeaderProps &
    Omit<
        InputHTMLAttributes<HTMLDivElement>,
        "size" | "id" | "children" | "title"
    >) => {
    return (
        <StepContainer
            className={`${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={scrollIntoView}
            {...props}
        >
            <StepNumber active={open}>{stepNumber}</StepNumber>
            <div className="flex flex-col gap-2 text-left">
                <StepTitle>{title}</StepTitle>
                {description && (
                    <StepDescription>{description}</StepDescription>
                )}
            </div>
        </StepContainer>
    );
};

const StepContent = ({ children, open, ...rest }: StepContentProps) => {
    const tabContentClass = cn("grid grid-cols-[48px_1fr] gap-4", {
        hidden: !open,
        visible: open,
    });

    return (
        <div className={tabContentClass} {...rest}>
            {children}
        </div>
    );
};

const Step = ({
    title,
    description,
    disabled,
    stepIndex,
    children,
    onNext,
    onNextLabel = "Next",
    showButton = true,
    isLast = false,
    setStep,
    isOpen,
    onChange, // handle on change
    button,
    loading = false,
}: StepProps & {
    stepIndex: number;
    isLast: boolean;
    setStep?: Dispatch<SetStateAction<number>>;
    isOpen: boolean;
    onChange?: (tab: number) => void;
}) => {
    const stepNumber = stepIndex + 1; // incrementing number of the tab
    const stepRef = useRef<HTMLDivElement | null>(null);

    const scrollIntoView = () => {
        // force scroll start of tab
        setTimeout(() => {
            stepRef?.current?.scrollIntoView({
                inline: "start",
                behavior: "smooth",
                block: "start",
            });
        }, 0);
    };

    const handleNext = async () => {
        if (typeof onNext === "function") {
            await onNext(); // run promise
        }

        // go to next tab if is not the last one
        if (!isLast) {
            const step = stepNumber + 1;
            handleChange(step);
            scrollIntoView(); // scroll into view only when tab is changed
        }
    };

    const handleChange = (tab: number) => {
        if (disabled) return; // handle disabled
        setStep?.(tab);
        onChange?.(tab);
    };

    const handleNextMutation = useMutation(handleNext);

    return (
        <div
            className={`${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            data-tab-index={stepNumber}
            ref={stepRef}
        >
            <>
                <StepHeader
                    disabled={disabled}
                    stepNumber={stepNumber}
                    title={title}
                    description={description}
                    open={isOpen}
                    scrollIntoView={scrollIntoView}
                    onClick={() => {
                        handleChange(stepNumber);
                    }}
                />
                <StepContent open={isOpen}>
                    <div className="relative flex justify-center w-12 h-full">
                        <div className="w-[2px] bg-gray-300 h-full"></div>
                    </div>
                    <div className="flex flex-col w-full gap-10 mt-10">
                        {loading ? <Placeholder.Card /> : children}
                        {showButton && (
                            <Button
                                loading={handleNextMutation.isLoading}
                                className="w-full"
                                onClick={() => {
                                    handleNextMutation.mutateAsync();
                                }}
                                disabled={
                                    disabled || button?.disabled || loading
                                }
                                {...button}
                            >
                                {onNextLabel}
                            </Button>
                        )}
                    </div>
                </StepContent>
            </>
        </div>
    );
};

export function Steps({ defaultStep = 1, onStepChange, steps }: StepsProps) {
    const [step, setStep] = useState<number>(defaultStep);

    return (
        <QueryClientProvider client={DEFAULT_QUERY_CLIENT_OPTIONS}>
            <div className="grid gap-8">
                {steps?.map((stepItem, stepIndex) => {
                    const isLast = stepIndex + 1 === steps?.length;
                    const isOpen = step === stepIndex + 1;

                    return (
                        <Step
                            key={stepIndex}
                            stepIndex={stepIndex}
                            isLast={isLast}
                            setStep={setStep}
                            isOpen={isOpen}
                            onChange={(step: number) => {
                                onStepChange?.(step); // pass current tab index
                                setStep(step);
                            }}
                            {...stepItem}
                        />
                    );
                })}
            </div>
        </QueryClientProvider>
    );
}
