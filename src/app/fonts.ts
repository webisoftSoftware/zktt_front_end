import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-plus-jakarta'
  });

export const fonts = {
  plusJakartaSans,
}