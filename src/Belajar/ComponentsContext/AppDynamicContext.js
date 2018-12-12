import React from 'react'
import {ThemeContext, themes} from './ComponentsContext/theme-context';
import ThemedButton from './ComponentsContext/themed-button'

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      ChangeTheme
    </ThemedButton>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }
  }

  render() {
    // Tombol ThemedButton didalam ThemeeProvider
    // menggunakan theme dari state saat satu yang 
    // dari luarnya menggunakan default dark theme 
    return (
      <div>
        <Page>
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme}/>
          </ThemeContext.Provider>
          <Section>
            <ThemedButton/>
          </Section>
        </Page>
      </div>
    )
  }
}

export default App;