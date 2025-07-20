// utils.ts

// fn transformUrl —— converts title to url
export function transformUrl(title: string) {
  return title.split(" ").join("-").toLowerCase();
}
