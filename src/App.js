import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const { user } = useUser();
  console.log(user)
  return (
    <p>
      Hello, <strong>{user.name}</strong>!
    </p>
  );
}

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
}

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Atque cupiditate non necessitatibus, eum aut a quisquam quibusdam quidem.
        Ullam consequuntur nisi repellat maxime ipsa eius laudantium praesentium.
        Ex esse on necessitatibus, eum aut a quisquam corporis!
      </p>
      <p>Written by <strong>{user.name}</strong></p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
