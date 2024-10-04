import Nat "mo:base/Nat";
import Array "mo:base/Array";

actor class Backend() {
  stable var files : [Blob] = [];
  stable var fileNames : [Text] = [];

  // Upload a file and store it
  public func uploadFile(name: Text, content: Blob) : async Nat {
    files := Array.append(files, [content]);
    fileNames := Array.append(fileNames, [name]);
    return files.size() - 1; // Return the index of the uploaded file
  };

  // Retrieve a file by index
  public func getFile(index: Nat) : async ?(Text, Blob) {
    if (index < files.size()) {
      return ?(fileNames[index], files[index]);
    } else {
      return null;
    };
  };

  // Get the total number of files
  public func getFileCount() : async Nat {
    return files.size();
  };

  // List all file names
  public func listFiles() : async [Text] {
    return fileNames;
  };
};