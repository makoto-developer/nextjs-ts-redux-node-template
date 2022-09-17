import type {
  NextComponentType,
  NextPageContext,
  NextPage as Page,
} from 'next'
import type { AppProps as Props } from 'next/app'

export type AppProps<P = Record<string, never>> = Props<P> & {
  Component: NextComponentType<NextPageContext, any, P> & { Template: React.FC }
}

export type NextPage<P = Record<string, unknown>, IP = P> = Page<P, IP> & {
  Template?: React.FC
}
