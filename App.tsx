/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {Buffer} from 'buffer';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const myTest = () => {
    console.log('Test 1');
    function TestBuffer(...args) {
      console.log(args);
      const buf = new Uint8Array(...args);
      Object.setPrototypeOf(buf, TestBuffer.prototype);
      return buf;
    }
    Object.setPrototypeOf(TestBuffer.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(TestBuffer, Uint8Array);
    console.log(TestBuffer(1).subarray(0, 1) instanceof TestBuffer);

    console.log('Test 2');
    const buf = Buffer.alloc(10);
    const subarray = buf.subarray(0, 5);
    console.log(subarray instanceof Buffer);
    console.log(Buffer.isBuffer(subarray));
    console.log(subarray.toString('base64'));

    console.log('Test 3');
    const buf2 = Buffer.alloc(10);
    function functionThatCallsSubarray(buf) {
      console.log(buf instanceof Buffer);
      const res = buf.subarray(0, 2);
      console.log(res instanceof Buffer);
      return res;
    }
    functionThatCallsSubarray(buf2);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Run Buffer Test">
            <Button
              title="Click Me and check console for logs"
              color="#000000"
              onPress={myTest}
            />
            {/* 'Run Buffer Test' */}
          </Section>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
