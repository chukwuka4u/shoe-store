'use server'

import { redirect } from "next/navigation"

export async function comeback(url: string) {
    redirect(url)
}