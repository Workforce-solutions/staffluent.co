// src/components/ui/card.tsx
import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
            {...props}
        />
    )
}

Card.displayName = "Card"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function CardContent({ className, ...props }: CardContentProps) {
    return (
        <div
            className={`p-6 pt-0 [&:not(:first-child)]:pt-6 ${className}`}
            {...props}
        />
    )
}

CardContent.displayName = "CardContent"