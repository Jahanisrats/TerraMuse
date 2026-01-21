from playwright.sync_api import Page, expect, sync_playwright

def verify_app_loads(page: Page):
    # 1. Arrange: Go to the app homepage.
    page.goto("http://localhost:3000/")

    # 2. Assert: Check if the root element exists and is not empty.
    # The blank page issue means the root div was empty.
    # We can check if specific content from the App is visible.
    # Looking at App.tsx would be good to know what to expect, but generally checking for title or some text.
    # Let's assume the title is "TerraMuse" from index.html.
    expect(page).to_have_title("TerraMuse")

    # Wait for React to mount and render something.
    # I'll wait for the #root to have some content.
    root = page.locator("#root")
    expect(root).not_to_be_empty()

    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="verification/verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_app_loads(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
