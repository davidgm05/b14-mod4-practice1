export function showContent(content: unknown): void {
    const appElement = document.getElementById("app");
    if (appElement !== null) {
      appElement.innerHTML += `<pre>${JSON.stringify(
        content,
        undefined,
        2
      )}</pre>`;
    }
  }

  export function getElementByIdFrom(
    id: string,
    functionName: string
  ): HTMLElement {
    const element = document.getElementById(id);
   
    if (element === null)
      throw new Error(`Error(${functionName}): element id '${id}' not found.`);
   
    return element;
  }