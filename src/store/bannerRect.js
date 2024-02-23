import { create } from 'zustand';

export const useBannerRect = create((set, get) => ({
    rect: {},
    setRect: (data) => set((state) => ({ rect : data })),
}));

export function isEmptyRect()
{
    if(useBannerRect.getState().rect && useBannerRect.getState().rect.x)
    {
        return false;
    }
    return true;
}