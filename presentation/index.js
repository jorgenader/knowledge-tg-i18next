// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  ecoSystem: require('../assets/i18next-ecosystem.jpg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Image src={images.ecoSystem} width={500} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            SPA & I18next
          </Heading>
          <Text margin="10px" textSize="1.5em" textColor="tertiary">
            Jorgen Ader
          </Text>
          <Text textSize="1em" textColor="secondary">
            13.08.2019
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why i18next?
          </Heading>
          <Appear>
            <List>
              <ListItem>Complete solution</ListItem>
              <ListItem>Flexibility</ListItem>
              <ListItem>Scalability</ListItem>
              <ListItem>Ecosystem</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">Examples</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">Translation access</Heading>
          <Appear>
            <div>
              <Text textColor="primary">gettext</Text>
              <CodePane lang="js" source={require('./examples/key-access-gettext.example')} />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text textColor="primary">i18next</Text>
              <CodePane lang="js" source={require('./examples/key-access-i18next.example')} />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">Resulting</Heading>
          <CodePane fit lang="js" source={require('./examples/key-access-i18next-result.example')} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">Plurals</Heading>
          <Appear>
            <div>
              <Text textColor="primary">gettext</Text>
              <CodePane lang="js" source={require('./examples/plural-gettext.example')} />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text textColor="primary">i18next</Text>
              <CodePane lang="js" source={require('./examples/plural-i18next.example')} />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text textColor="primary">Resulting file</Text>
          <CodePane fit lang="js" source={require('./examples/plural-i18next-result.example')} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">Interpolation</Heading>
          <Appear>
            <div>
              <Text textColor="primary">gettext</Text>
              <CodePane lang="js" source={require('./examples/interpolation-gettext.example')} />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text textColor="primary">i18next</Text>
              <CodePane lang="js" source={require('./examples/interpolation-i18next.example')} />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">Interpolation in JSX</Heading>
          <Appear>
            <div>
              <Text textColor="primary">Before</Text>
              <CodePane lang="js" source={require('./examples/interpolation-i18next-jsx-before.example')} />
            </div>
          </Appear>
          <Appear>
            <div>
              <Text textColor="primary">After</Text>
              <CodePane lang="js" source={require('./examples/interpolation-i18next-jsx-after.example')} />
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text textColor="primary">Resulting file</Text>
          <CodePane fit lang="js" source={require('./examples/interpolation-i18next-result.example')} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text textColor="primary">Project template examples</Text>
          <Appear>
            <CodePane fit lang="js" source={require('./examples/template-sagas-usage.example')} />
          </Appear>
        </Slide>
        <Slide>
          <Text>Big thanks to Joosep for the research</Text>
          <Image src={images.goodWork} width={500} />
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            References
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/JoosepAlviste/parrot-mania/pull/1">
                Joosep did the research
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://gitlab.com/thorgate/ymo/">
                YMO project
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/FormidableLabs/spectacle/">
                Spectacle for the slides
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.i18next.com/">
                I18next
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://react.i18next.com/">
                I18next React
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" caps>
            Thanks for listening
          </Heading>
          <Link href="https://github.com/metsavaht/knowledge-tg-i18next">
            Slides @ https://github.com/metsavaht/knowledge-tg-i18next
          </Link>
        </Slide>
      </Deck>
    );
  }
}
