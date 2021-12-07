const { button } = require("./button");

describe("button", () => {
  it("should return a button element with the appropriate text and attributes", () => {
    expect(
      button("Save", {
        className: "primary",
        onClick: (e) => {
          e.preventDefault();
          console.log("hi!");
        },
      })
    ).toMatchInlineSnapshot(`
<button
  class="primary"
>
  Save
</button>
`);
  });
});
