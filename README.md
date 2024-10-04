# DecentraDrive

DecentraDrive is a decentralized file storage application built with **React** and **Motoko**, running on the **Internet Computer**. It allows users to upload, store, and retrieve files in a decentralized manner, ensuring data integrity and availability without depending on centralized servers.

## Features

- **Decentralized Storage**: Leverage the power of the Internet Computer for storing files securely.
- **File Upload and Download**: Easily upload files and download them whenever needed.
- **Scalable and Efficient**: Built to scale with the needs of users while maintaining efficiency.
- **Modern Technologies**: Utilizes React for the frontend and Motoko for the backend.

## Demo

![DecentraDrive Demo](./assets/decentradrive-demo.gif)

## Getting Started

Follow these instructions to set up and run DecentraDrive on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (version 14 or later)
- **npm** (version 6 or later)
- **DFX SDK** (version 0.14.0 or later)
- **Internet Computer Local Replica**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/raccoon254/decentradrive.git
   cd decentradrive
   ```

2. **Install Dependencies**

   ```bash
   npm run setup
   ```

3. **Start the Internet Computer Local Replica**

   ```bash
   dfx start --clean --background
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:3000`.

## Usage

### Uploading a File

1. Click on the **"Choose File"** button and select a file from your computer.
2. Click the **"Upload"** button to upload the file to the decentralized storage.

### Listing and Downloading Files

1. The uploaded files will appear in the **Files** list.
2. Click on the **"Download"** button next to a file to download it.

## Project Structure

```
decentradrive/
├── backend/
│   └── Backend.mo         # Motoko backend actor
├── src/
│   ├── components/
│   │   ├── FileUpload.tsx # Component for uploading files
│   │   └── FileList.tsx   # Component for listing and downloading files
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for React
│   └── declarations/      # Generated canister declarations
├── assets/
│   └── ...                # Images and other assets
├── dfx.json               # DFX configuration
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Scripts

- **Setup the Project**

  ```bash
  npm run setup
  ```

- **Start the Development Servers**

  ```bash
  npm run start
  ```

- **Build the Project**

  ```bash
  npm run build
  ```

- **Run Tests**

  ```bash
  npm run test
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **[Internet Computer](https://internetcomputer.org/)** - For providing the decentralized platform.
- **[Motoko Language](https://internetcomputer.org/docs/current/developer-docs/build/languages/motoko/)** - For the powerful backend language.
- **[React](https://reactjs.org/)** - For the frontend library.
- **[ic-reactor](https://github.com/icdevs/ic-reactor)** - For simplifying React and Internet Computer integration.

## Contact

- **Email**: tomsteve187@gmail.com
- **GitHub**: [@raccoon254](https://github.com/raccoon254)