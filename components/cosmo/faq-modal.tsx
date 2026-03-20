"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Что такое CosmoCenter?",
    answer: "CosmoCenter — это интерактивная платформа для изучения космоса. Мы предоставляем образовательные материалы о планетах, звездах и последних космических миссиях."
  },
  {
    question: "Как зарегистрироваться?",
    answer: "Нажмите на кнопку 'Войти' в правом верхнем углу сайта или в боковом меню. В открывшемся окне выберите 'Зарегистрироваться' и введите свой email и пароль, либо войдите через Google."
  },
  {
    question: "Бесплатна ли платформа?",
    answer: "Да, базовый доступ ко всем образовательным материалам и интерактивным разделам абсолютно бесплатен."
  },
  {
    question: "Как часто обновляются данные?",
    answer: "Мы регулярно следим за новостями ведущих космических агентств (NASA, ESA, Роскосмос) и обновляем нашу базу знаний еженедельно."
  },
  {
    question: "Могу ли я предложить свою статью?",
    answer: "Конечно! Вы можете связаться с нами через форму обратной связи на вкладке 'Контакты' и отправить свои материалы для рассмотрения нашей командой."
  }
];

interface FaqModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FaqModal({ isOpen, onOpenChange }: FaqModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-background/95 glass-strong border-white/10 max-h-[80vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">Часто задаваемые вопросы</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Найдите ответы на самые популярные вопросы о нашей платформе.
          </DialogDescription>
        </DialogHeader>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
