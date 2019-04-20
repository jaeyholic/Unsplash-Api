import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-300 py-6 mt-16">
      <p className="text-center">
        © copyright {new Date().getFullYear()}. All rights reserved.{" "}
        <a href="https://github.com/jaeyholic" target="_blank">
          Jeff Landen
        </a>
      </p>
    </div>
  );
}
