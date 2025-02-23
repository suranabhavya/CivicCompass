// components/ResidentialButton.js
"use client"; // Enable client-side interactions

import { useRouter } from "next/navigation";

export default function ResidentialButton() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push("/people");
    };

    return (
        <>
            <button
                className="button"
                style={{ "--clr": "#7808d0" }}
                onClick={handleNavigation}
            >
                <span className="button__icon-wrapper">
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg"
                        width="10"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg button__icon-svg--copy"
                        width="10"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </span>
                RESIDENT
            </button>

            <style jsx>{`
                .button {
                    line-height: 1;
                    text-decoration: none;
                    display: inline-flex;
                    border: none;
                    cursor: pointer;
                    align-items: center;
                    gap: 0.75rem;
                    background-color: #0056b3;
                    color: #fff;
                    border-radius: 10rem;
                    font-weight: 600;
                    padding: 0.75rem 1.5rem;
                    padding-left: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: background-color 0.3s;
                }

                .button__icon-wrapper {
                    flex-shrink: 0;
                    width: 25px;
                    height: 25px;
                    position: relative;
                    color: #0056b3;
                    background-color: #fff;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    overflow: hidden;
                }

                .button:hover {
                    background-color: #000;
                }

                .button:hover .button__icon-wrapper {
                    color: #000;
                }

                .button__icon-svg--copy {
                    position: absolute;
                    transform: translate(-150%, 150%);
                }

                .button:hover .button__icon-svg:first-child {
                    transition: transform 0.3s ease-in-out;
                    transform: translate(150%, -150%);
                }

                .button:hover .button__icon-svg--copy {
                    transition: transform 0.3s ease-in-out 0.1s;
                    transform: translate(0);
                }
            `}</style>
        </>
    );
}
