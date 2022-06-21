import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://example.com/' }}
      style={{ marginTop: 20 }}
    />
  );
}
