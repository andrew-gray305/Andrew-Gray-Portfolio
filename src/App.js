import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Andrew Gray</h1>
          <p className="text-lg">Cybersecurity Student & Aspiring Security Engineer</p>
          <p className="text-sm">Littleton, MA • Drew@gray2002.com • LinkedIn</p>
        </header>

        {/* About Me */}
        <section className="bg-white shadow rounded-2xl p-6 space-y-3">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>
            I am a Computer Science major with an emphasis in Information Security. I enjoy
            hands-on cybersecurity work, breaking and securing systems, and learning how real
            attacks work. I'm actively building skills in network security, Linux, secure coding,
            digital forensics, and penetration testing.
          </p>
        </section>

        {/* Projects */}
        <section className="bg-white shadow rounded-2xl p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="space-y-4">
            <div className="p-4 border rounded-xl">
              <h3 className="text-xl font-semibold">Threaded Password Cracker</h3>
              <p>
                A multithreaded brute-force password cracker written in C++ that generates and
                tests two-word password combinations. Demonstrates threading, synchronization,
                and security concepts behind password strength.
              </p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="text-xl font-semibold">Custom Linux Shell (Pipes)</h3>
              <p>
                A Linux shell built in C that supports process creation, piping, and command
                execution. Shows understanding of OS internals, process control, and secure
                coding.
              </p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="text-xl font-semibold">File Timestamp Manipulation Tool</h3>
              <p>
                A C++ utility that alters file timestamps, demonstrating understanding of Linux
                filesystems and anti-forensic concepts.
              </p>
            </div>
            <div className="p-4 border rounded-xl">
              <h3 className="text-xl font-semibold">Web App Vulnerability Assessment</h3>
              <p>
                Conducted security testing on DVWA using Nmap, Burp Suite, and manual testing.
                Identified vulnerabilities and documented findings.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white shadow rounded-2xl p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Linux, Bash, Secure Coding</li>
            <li>Nmap, Wireshark, Burp Suite</li>
            <li>Python, C, C++, Java</li>
            <li>Networking, Vulnerability Analysis, Threat Modeling</li>
          </ul>
        </section>

        {/* Certifications & Training */}
        <section className="bg-white shadow rounded-2xl p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Training</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>TryHackMe – Linux, Privilege Escalation, Networking Fundamentals</li>
            <li>HackTheBox – Beginner Labs</li>
            <li>Coursework: Systems Programming, OS, Computer Security</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-white shadow rounded-2xl p-6 space-y-3 text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Email: Drew@gray2002.com</p>
          <p>LinkedIn: linkedin.com/in/andrewgray</p>
        </section>
      </div>
    </div>
  );
}
