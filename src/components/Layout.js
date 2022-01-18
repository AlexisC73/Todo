import Signout from './GoogleButton/Signout'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Signout />
      </Header>
      <main>{children}</main>
    </>
  )
}
