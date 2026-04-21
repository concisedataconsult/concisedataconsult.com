import fs from "node:fs"
import path from "node:path"
import Script from "next/script"

function extractSection(source: string, pattern: RegExp) {
  const match = source.match(pattern)
  return match?.[1] ?? ""
}

function getWireframeContent() {
  const filePath = path.join(process.cwd(), "ConciseData_Website_Wireframe.html")
  const source = fs.readFileSync(filePath, "utf8")

  const style = extractSection(source, /<style>([\s\S]*?)<\/style>/i)
  const body = extractSection(source, /<body[^>]*>([\s\S]*?)<\/body>/i)
  const script = extractSection(source, /<script>([\s\S]*?)<\/script>/i)

  const navReplacement = `
  <a href="#hero" class="nav-logo" aria-label="ConciseData Home">
    <div class="nav-logo-mark concise-logo-slot">
      <img src="/logo.webp" alt="ConciseData logo" class="concise-logo-image" />
    </div>
  </a>`

  const footerReplacement = `
        <div class="footer-logo">
          <div class="footer-logo-mark concise-logo-slot concise-logo-slot-footer">
            <img src="/logo.webp" alt="ConciseData logo" class="concise-logo-image" />
          </div>
          <span class="footer-logo-text">ConciseData Consult Limited</span>
        </div>`

  const updatedBody = body
    .replace(
      /<a href="\/" class="nav-logo" aria-label="ConciseData Home">[\s\S]*?<\/a>/i,
      navReplacement,
    )
    .replace(
      /<div class="footer-logo">[\s\S]*?<\/div>\s*<\/div>\s*<p class="footer-tagline">/i,
      `${footerReplacement}
        </div>
        <p class="footer-tagline">`,
    )

  const overrides = `
  .nav-logo {
    gap: 0;
  }

  .nav-logo-text {
    display: none !important;
  }

  .concise-logo-slot {
    background: transparent !important;
    border-radius: 0 !important;
    width: 86px !important;
    height: 86px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .concise-logo-slot-footer {
    width: 86px !important;
    height: 86px !important;
  }

  .concise-logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 6px 16px rgba(62, 174, 255, 0.18));
  }
  `

  return {
    style: `${style}\n${overrides}`,
    body: updatedBody,
    script,
  }
}

export default function Home() {
  const { style, body, script } = getWireframeContent()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Script id="wireframe-behavior" strategy="afterInteractive">
        {script}
      </Script>
    </>
  )
}
