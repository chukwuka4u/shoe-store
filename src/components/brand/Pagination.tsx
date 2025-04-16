"use client";

import React, { useState } from "react";
import PaginationButton from "./PaginationButton";

interface PaginationProps {
    totalPages: number;
    initialPage?: number;
    onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    initialPage = 1,
    onPageChange,
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        onPageChange?.(page);
    };

    const goToPrevPage = () => handlePageChange(currentPage - 1);
    const goToNextPage = () => handlePageChange(currentPage + 1);

    return (
        <nav
            className="flex gap-4 justify-center items-center w-full"
            aria-label="Pagination"
        >
            <div className="self-stretch my-auto w-12">
                <button
                    className="flex gap-1 justify-center items-center px-4 py-2 w-full rounded-lg border border-solid border-[#232321] min-h-8"
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac929c03c6ef5912959b4c018d13e888392bb8e7?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                        alt="Previous"
                        className="object-contain flex-1 shrink self-stretch my-auto w-4 aspect-square basis-0"
                    />
                </button>
            </div>

            <div className="self-stretch my-auto w-[39px]">
                <PaginationButton
                    active={currentPage === 1}
                    onClick={() => handlePageChange(1)}
                >
                    1
                </PaginationButton>
            </div>

            <div className="self-stretch my-auto w-[41px]">
                <PaginationButton
                    active={currentPage === 2}
                    onClick={() => handlePageChange(2)}
                >
                    2
                </PaginationButton>
            </div>

            <div className="self-stretch my-auto text-sm font-medium tracking-wide uppercase text-neutral-800">
                ...
            </div>

            <div className="self-stretch my-auto w-12">
                <PaginationButton
                    active={currentPage === totalPages}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </PaginationButton>
            </div>

            <div className="self-stretch my-auto w-12">
                <button
                    className="flex gap-1 justify-center items-center px-4 py-2 w-full rounded-lg border border-solid border-[#232321] min-h-8"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a96656b7a681d2c8dc7126c55f84ad83d1124396?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                        alt="Next"
                        className="object-contain flex-1 shrink self-stretch my-auto w-4 aspect-square basis-0"
                    />
                </button>
            </div>
        </nav>
    );
};

export default Pagination;