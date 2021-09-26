import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';
import Header from './components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;