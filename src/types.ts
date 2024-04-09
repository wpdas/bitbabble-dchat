export type Group = {
  accountId: string;
  blockHeight: number;
  value: string;
};

export type GroupsContextProps = {
  groupsList: Group[];
  ready: boolean;
  updateGroupsList: (updatedGroupsList: Group[]) => void;
};

export interface NEARSocialUserProfile {
  name?: string;
  linktree?: {
    twitter?: string;
    github?: string;
    telegram?: string;
    website?: string;
  };
  image?:
    | {
        ipfs_cid?: string;
      }
    | any;
  description?: string;
  backgroundImage?: {
    url?: string;
  };
  tags?: Record<string, string>;
  horizon_tnc?: string;
}

export type SimpleProfileInfo = {
  accountId: string;
  name: string;
  profileImage: string;
};

export type MessageData = {
  from: string;
  to: string;
  message: string;
  timestamp: number;
};
