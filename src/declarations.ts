
declare const Earth: {
  startAutoRotate: Function;
};

type Pin = {
  coords: {lat: number, long: number},
  name: string,
  id: number,
  newReleaseTag: boolean
};

type Link = {
  name: string,
  size: string,
  link: string
};

type Version = {
  number: string,
  changelog: string,
  game_version: string,
  date: string,
  links: Link[]
};

type Project = {
  slug: string,
  name: string,
  description: string,
  game: string
  dev_comment: string,
  dependencies: string[],
  image: string,
  thumbnail: string,
  released: boolean,
  show_new_release_tag: boolean,
  name_has_map: boolean,
  coords: {
    lat: number,
    lng: number
  },
  versions: Version[]
}
