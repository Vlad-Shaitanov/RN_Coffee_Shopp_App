import {create} from 'zustand'; //Создание стора
import {produce} from 'immer'; //Обновление глубоких вложенностей в сторе
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      // Инициализация хранилища
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      FavoritesList: [],
      CartPrice: 0,
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-app', // Имя элемента хранилища (должно быть уникальным)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
