import { emptyDir } from "https://deno.land/std@0.106.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.106.0/path/mod.ts";

const output = "./deno";

// Versions
const react_version = "17.0.2";
const react_types_version = "17.0.19";
const prop_types_version = "15.7.4";
const css_types_version = "3.0.8";
const scheduler_version = "0.20.2";
const reactdom_types_version = "17.0.9";

await emptyDir(join(output, "src"));

// Download React library and dependencies
download(
  `https://cdn.esm.sh/v45/react@${react_version}/es2021/react.js`,
  join(output, "src/react.js"),
  (content) =>
    content
      .replace(
        /import __object_assign\$ from "[^"]+";/,
        "const __object_assign$ = Object.assign;",
      ),
);

download(
  `https://cdn.esm.sh/v45/react-dom@${react_version}/es2021/react-dom.js`,
  join(output, "src/react_dom.js"),
  (content) =>
    content
      .replace(
        /import __object_assign\$ from "[^"]+";/,
        "const __object_assign$ = Object.assign;",
      )
      .replace(
        /import __react\$ from "[^"]+";/,
        "import __react$ from '../react.ts';",
      )
      .replace(
        /import __scheduler\$ from "[^"]+";/,
        "import __scheduler$ from './scheduler.js';",
      ),
);

download(
  `https://cdn.esm.sh/v45/react-dom@${react_version}/es2021/server.js`,
  join(output, "src/react_dom_server.js"),
  (content) =>
    content
      .replace(
        /import __object_assign\$ from "[^"]+";/,
        "const __object_assign$ = Object.assign;",
      )
      .replace(
        /import __react\$ from "[^"]+";/,
        "import __react$ from '../react.ts';",
      )
);

download(
  `https://cdn.esm.sh/v45/scheduler@${scheduler_version}/es2021/scheduler.js`,
  join(output, "src/scheduler.js"),
);

// Download types
download(
  `https://unpkg.com/@types/prop-types@${prop_types_version}/index.d.ts`,
  join(output, "src/prop_types.d.ts"),
);
download(
  `https://unpkg.com/csstype@${css_types_version}/index.d.ts`,
  join(output, "src/csstype.d.ts"),
);
download(
  `https://unpkg.com/@types/react@${react_types_version}/global.d.ts`,
  join(output, "src/global.d.ts"),
);
download(
  `https://unpkg.com/@types/react@${react_types_version}/index.d.ts`,
  join(output, "src/react.d.ts"),
  (content) =>
    content
      .replace('"global.d.ts"', '"./global.d.ts"')
      .replace("'csstype'", "'./csstype.d.ts'")
      .replace("'prop-types'", "'./prop_types.d.ts'")
      .replace("'scheduler/tracing'", "'./interaction.d.ts'"),
);
download(
  `https://unpkg.com/@types/react-dom@${reactdom_types_version}/index.d.ts`,
  join(output, "src/react_dom.d.ts"),
  (content) =>
    content
      .replace("'react'", "'./react.d.ts'"),
);
download(
  `https://unpkg.com/@types/react-dom@${reactdom_types_version}/server.d.ts`,
  join(output, "src/react_dom_server.d.ts"),
  (content) =>
    content
      .replace("'react'", "'./react.d.ts'"),
);

// Missing type
Deno.copyFile("./files/interaction.d.ts", join(output, "src/interaction.d.ts"));

async function download(
  url: string,
  dest: string,
  transform?: (data: string) => string,
) {
  const response = await fetch(url);
  let content = await response.text();

  if (transform) {
    content = transform(content);
  }

  await Deno.writeTextFile(dest, content);
}
