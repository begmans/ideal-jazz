export type AlbumCover = {
  "src": string;
  "alt": string;
};

export type AlbumDetail =
  { "id": number;  
    "leader": string;
    "title": string;
    "year": number;
    "description": string;
    "cover": AlbumCover;
    "type": string;
    "label": string;
    "distributor": string;
    "essential": boolean;
};