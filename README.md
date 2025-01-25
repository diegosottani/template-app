# Bem vindo ao Template 👋

É feito com algumas libs pré instaladas, como styled-components e principais do expo.
Utiliza o OneSignal para Push Notification.

## app.config.js

É utilizado em JS ao invés do JSON, para que possa utilizar variáveis de ambiente. Com js fica bem mais flexível.

## Desenvolvendo localmente

#### Instalar dependências:

```bash
npm install
```

#### Iniciar o projeto

```bash
npx expo start
```

#### Executando

O aplicativo utiliza recursos avançados que necessitam executar como [development build](https://docs.expo.dev/develop/development-builds/introduction/).
Então logo após rodar o app, aperte 's' para alterar a execução para build de desenvolvimento.
Depois aperte 'a' para executar o _build_ no emulador do Android Studio ou no smartphone.

#### Variáveis de ambiente

Crie um arquivo **.env** e configure as variáveis de ambiente de acordo com o **env.example**.
As variáveis de ambiente necessárias para o projeto são obtidas no painel do Google Cloud Platform (GCP). São elas:

- EXPO_PUBLIC_ANDROID_CLIENT_ID= IDs do cliente OAuth 2.0 para android configurada no GCP.
- EXPO_PUBLIC_IOS_CLIENT_ID= IDs do cliente OAuth 2.0 para ios configurada no GCP.
- EXPO_PUBLIC_WEB_CLIENT_ID= IDs do cliente OAuth 2.0 para webClient configurada no GCP.
- EXPO_PUBLIC_ONE_SIGNAL_ANDROID= IDs dos apps gerados no OneSignal.
- EXPO_PUBLIC_ONE_SIGNAL_IOS= IDs dos apps gerados no OneSignal.

## Deploy EAS

Está tudo configurado no Expo para executar o _build_ no servidor e enviar para a loja de aplicativos. Basta rodar os comandos para **build** e **submit**:

#### Se o app estiver em fase de Testes nas stores:

```bash
npm run draft
```

#### Se o app estiver em fase de Produção:

```bash
npm run deploy
```

#### Publicar na loja

Ir no painel da loja de aplicativos para ver build atualizada.  
Se necessário, clicar em publicar e/ou promover a build para a faixa desejada (testes interno, produção, etc).

## Deploy com build local

Ejetar o projeto para criar a pasta nativa android e/ou ios (dependendo do seu setup).

```bash
npx expo prebuild --clean
```

É necessário obter as assinaturas do app. O arquivo .jks assim como todas as credenciais podem ser obtidas com o comando:

```bash
eas credentials
```

Após o comando, nas opções que aparecerem, selecione credentials.json  
Nesse arquivo terá os dados necessários para configurar no build.gradle

Basta baixar o arquivo .jks e deixar em uma pasta segura. Pode mover para a pasta temporária android apenas para executar o build.
**IMPORTANTE:** não faça commit desse arquivo:

```bash
mv @nomeDONO__nomeAPP.jks android/app/
```

Depois acesso o arquivo android/app/build.gradle

```bash
cd android/app/
```

Em signingConfigs adicione a linha:

```bash
release {
  storeFile file("$rootDir/app/@nomeDONO__nomeAPP.jks")
  storePassword "Obtido no eas credentials"
  keyAlias "Obtido no eas credentials"
  keyPassword "Obtido no eas credentials"
}
```

E na buildTypes adicione a linha:

```bash
release {
  signingConfig signingConfigs.release
  minifyEnabled false
  shrinkResources false
  proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
}
```

### Versão

O Google Play sempre precisa de uma nova versão.  
Ajuste o versionCode para a próxima versão no build.gradle.  
Ou configure pelo app.config.js.

### Buildando com gradle (local)

```bash
cd android
```

#### APK - development

```bash
./gradlew assembleRelease
```

#### AAB - production

```bash
./gradlew bundleRelease
```

## Definindo ícones de notificação local (opcional)

Quando recebemos notificação do app, é necessário um ícone, que no caso é o arquivo ./assets/images/notification-icon.png  
Esse ícone tem o tamanho de 96x96 e é ajustado para casa DPI automaticamente.
**Caso tenho algum problema** com tamanho de ícone, basta ejetar o projeto, copiar os ícones da pasta ./assets/images/nomeAPP_notification/res
e colar na pasta android/app/src/main/res

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
