# Remotion Render Project

This project is a video rendering application using Remotion and Lottie animations. It allows you to create videos from Lottie animations defined in JSON format.

## Project Structure

```
remotion-render-project
├── src
│   ├── index.tsx               # Entry point of the Remotion project
│   ├── components
│   │   └── LottieAnimation.tsx  # Component to render Lottie animations
│   └── assets
│       └── animation.json       # Lottie animation data in JSON format
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
├── remotion.config.ts           # Remotion configuration file
└── README.md                    # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd remotion-render-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   To start the development server, use:
   ```bash
   npm run start
   ```

4. **Render the video:**
   To render the video, use:
   ```bash
   npm run build
   ```

## Usage

The main entry point of the application is `src/index.tsx`, which sets up the Remotion video renderer. The `LottieAnimation` component located in `src/components/LottieAnimation.tsx` is responsible for loading and displaying the animation from `src/assets/animation.json`.

You can customize the playback of the animation by passing props to the `LottieAnimation` component.

## License

This project is licensed under the MIT License.