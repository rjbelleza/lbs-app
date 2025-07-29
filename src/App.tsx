import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes"

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}

export default App
